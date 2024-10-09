/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Container   } from 'react-bootstrap' 

//---------------------------------

function PageTable({data,columns , tableTitle}) {
    // const [pageSize, setPageSize] = useState(5);
    //-----------------------------------
    return (
        <Container  className={`PageTable g-5 p-md-3 gap-5  justify-content-center`}>
            <div className="container">
                <h2 className={"title"}>{tableTitle}</h2>
            </div>
            <Box m="40px" width="95%" sx={{
                backgroundColor:'#fff', padding : '20px','border-radius': '15px','box-shadow': '5px 5px 10px var(--cultured)',
                "& .MuiDataGrid-root": {border: "none" , fontSize : '15px'},
                // "& .MuiDataGrid-cell": {borderBottom: "none" , boxShadow: `inset -7px 0px 20px  red`},
                "& .name-column--cell": {color: '#5DB8DD' ,fontWeight :"bold"},
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: '#000', color: 'hsl(0, 0%, 47%)'},
                // "& .MuiDataGrid-virtualScroller": {
                //     boxShadow: `inset -1px 5px 20px -3px green `, height : '60vh' , overflow: 'auto'},
                // "& .MuiDataGrid-footerContainer": {
                //     boxShadow: `inset -1px 5px 20px -3px green `,borderRadius : '0 0 10px 10px',backgroundColor: '#ff822e',
                //     color: '#fff',border: `solid 1px #ff9a57`},
                // "& .MuiCheckbox-root": {color: 'red !important',fontWeight :"bold"},
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: `#eee !important`,}
                }}>
                <DataGrid rows={data} columns={columns} components={{ Toolbar: GridToolbar }} getRowId={row=>row.id} 
                    // pageSize={pageSize}
                    // onPageSizeChange={(n)=>setPageSize(n)}
                    // rowPageSizeOptions={[5,10, 20]}
                    // pagination
                    disableRowSelectionOnClick
                    checkboxSelection
                    // {...data}
                    initialState={{
                    // ...data.initialState,
                    pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 10, 25,50]}
                    />
            </Box>
        </Container>
    )
}

export default PageTable ;



        
