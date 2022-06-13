import React, { useState } from "react";
import {
  Button,
  Card,
  CircularProgress,
  Container,
  Stack,
  Table,
  TableBody, TableCell,
  TableContainer, TablePagination, TableRow,
  Typography
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { filter } from "lodash";
import Page from "../components/Page";
import Iconify from "../components/Iconify";
import { UserListHead, UserListToolbar } from "../sections/@dashboard/user";
import Scrollbar from "../components/Scrollbar";
import SearchNotFound from "../components/SearchNotFound";
import useFetcher from "../hooks/useFetcher";
import USERLIST from "../_mock/user";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'diploma', label: 'Diploma', alignRight: false },
  { id: 'field', label: 'Field', alignRight: false },
  { id: 'speciality', label: 'Speciality', alignRight: false },
  { id: 'level', label: 'Level', alignRight: false },
  { id: 'groupCode', label: 'Group Code', alignRight: false },
  { id: 'subGroup', label: 'SubGroup Code', alignRight: false },
  { id: '' },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => {
      return _user?.groupCode && _user.groupCode.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
  return stabilizedThis.map((el) => el[0]);
}


function Groups(props) {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('cin');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data, error, loading } = useFetcher('/admin/groups');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.data?.length || 0) : 0;

  const filteredStudents = applySortFilter(data?.data || [], getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredStudents.length === 0;
  return (
    <Page title="Groups">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Groups
          </Typography>

          <Button
            variant="contained"
            component={RouterLink}
            to=""
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Group
          </Button>
        </Stack>

        <Card>
          <UserListToolbar placeholder={"Search by Group Code"} numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
          {loading ? (
            <Stack my={'20px'} alignItems="center" justifyContent="center">
              <CircularProgress />
            </Stack>
          ) : (
            data && (
              <>
                <Scrollbar>
                  <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                      <UserListHead
                        order={order}
                        orderBy={orderBy}
                        headLabel={TABLE_HEAD}
                        rowCount={data?.data?.length}
                        numSelected={selected.length}
                        onRequestSort={handleRequestSort}
                        onSelectAllClick={handleSelectAllClick}
                      />
                      <TableBody>
                        {filteredStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {

                          const {subGroup, _id, diploma = 'LA', field = '', speciality = '' ,groupCode ='',level='' } = row;
                          const isItemSelected = selected.indexOf(groupCode) !== -1;
                          // eslint-disable-next-line no-unused-expressions
                          subGroup?.length ===0 && subGroup.push({subGroupCode: ""})
                          return subGroup.map(row => {
                            return (
                              <TableRow
                                hover
                                key={_id}
                                tabIndex={-1}
                                role="checkbox"
                                selected={isItemSelected}
                                aria-checked={isItemSelected}
                              >
                                <TableCell component="th" scope="row" padding="normal">
                                  <Stack direction="row" alignItems="left" spacing={2}>
                                    <Typography variant="subtitle2" noWrap>
                                      {diploma}
                                    </Typography>
                                  </Stack>
                                </TableCell>
                                <TableCell align="left">
                                  <Typography variant="subtitle2" noWrap>
                                    {field}
                                  </Typography>
                                </TableCell>
                                <TableCell align="left">
                                  <Typography variant="subtitle2" noWrap>
                                    {speciality}
                                  </Typography>
                                </TableCell>

                                <TableCell align="left">
                                  <Typography variant="subtitle2" noWrap>
                                    {level}
                                  </Typography>
                                </TableCell>
                                <TableCell align="left">
                                  <Typography variant="subtitle2" noWrap>
                                    {groupCode}
                                  </Typography>
                                </TableCell>
                                <TableCell align="left">
                                  <Typography variant="subtitle2" noWrap>
                                    {row.subGroupCode}
                                  </Typography>
                                </TableCell>

                                <TableCell align="left">
                                  <Button >
                                    Schedule
                                  </Button>
                                </TableCell>
                                <TableCell align="left">
                                  <Button >
                                    Students
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })

                        })}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>

                      {isUserNotFound && (
                        <TableBody>
                          <TableRow>
                            <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                              <SearchNotFound searchQuery={filterName} />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      )}
                    </Table>
                  </TableContainer>
                </Scrollbar>


              </>
            )
          )}
        </Card>
      </Container>
    </Page>

  );
}

export default Groups;
