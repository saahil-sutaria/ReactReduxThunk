import React from 'react';
import '../Styles/ComponentsStyle.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from 'react-bootstrap/Table';
import orderBy from 'lodash/orderBy'

/* renders table with sort-by-column name*/
class StatsTable extends React.Component{
    constructor(props){
        super()
        this.state = {
            sortDirection: true,
            columnName : '', 
        }
        this.data=props.data
    }
    handleSort = (colName) =>{
        const colToprops = {
            'WEEK ENDING': 'weekEnding',
            'RETAIL SALES': 'retailSales',
            'WHOLESALES SALE': 'wholesaleSales',
            'UNITS SOLD':'unitsSold' , 
            'RETAILER MARGIN':'retailerMargin'
        }
        this.setState(state => ({colName: colToprops[colName], sortDirection: !state.sortDirection}));
        let direction = ''
        if (this.state.sortDirection.toString() === "true"){
            direction = 'asc'
        }
        else{
            direction = 'desc'
        }
        /* to order table by columnName and Direction */
        this.data = orderBy(this.props.data,colToprops[colName], direction)
    }
    render(){
        const colNames = ['WEEK ENDING', 'RETAIL SALES', 'WHOLESALES SALE', 'UNITS SOLD', 'RETAILER MARGIN']
        return(
            <Table  hover size="lg">
                    <thead>
                        <tr>
                            {colNames.map((key, i) => {
                                if(this.state.sortDirection === true){
                                    return <th onClick={()=>{this.handleSort(key)}} key={i}>
                                            {key}&nbsp;<i className="fa fa-angle-up"></i>
                                            </th>
                                }
                                else{
                                    return <th onClick={()=>{this.handleSort(key)}} key={i}>
                                            {key}&nbsp;<i className="fa fa-angle-down"></i>
                                        </th>
                                }
                            }
                            )}
                        </tr>
                    </thead>
                    <tbody>  
                    {
                    this.data.map((key, i)=> {
                        return (
                            <tr key={i} >
                                <td>{key.weekEnding}</td>
                                <td>${key.retailSales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>${key.wholesaleSales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{key.unitsSold}</td>
                                <td>${key.retailerMargin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            </tr>)})
                    }
                    </tbody>
            </Table>
        )
    }
}
export default StatsTable;
