import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { HttpRequest } from '../helper/httpRequest';
import { InputText } from 'primereact/inputtext';
import { useHistory } from "react-router-dom";

const TableForm = () => {
    const history = useHistory()
    const [reports, setReports] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const getReports = async () => {
        const resp = await HttpRequest("GET", 'http://localhost:4200/api/uses/getAllData')
        setReports(resp.response.data);
        console.log(resp)
    }
    
    useEffect(() => {
        getReports();
    }, []);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
    const header = (
        <div className="flex justify-center ">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Type keyword" />
            </span>
        </div>
    );
    const deleteData=async(id)=>{
        console.log(id)
        await HttpRequest("DELETE",`http://localhost:4200/api/uses/delete?uuid=${id}`)

        getReports();
    }
    const updateRoute = (rawData) =>{
        console.log(rawData)
        localStorage.setItem('rawDatas',JSON.stringify(rawData))
        history.push('/update')
    }
    const actionTemplate = (rawData) => {
        return <div>
            <Button type="button" onClick={()=>{updateRoute(rawData)}}>EDIT</Button>
            <Button type="button" onClick={()=>{deleteData(rawData.id)}}>Delete</Button>
        </div>
    }
    return (
        <div>
            <div className="card">
                <div className="header">
                    <h5 className="text-title">List of All Equipments</h5>
                </div>
                <DataTable value={reports} className="p-datatable-responsive-demo p-datatable-sm" paginator header={header}
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} globalFilter={globalFilter}>
                    <Column field="full_name" header="Full Name"></Column>
                    <Column field="Equipment" header="Equipment"></Column>
                    <Column field="serialNo" header="Serial No"></Column>
                    <Column field="Problem" header="Problem"></Column>
                    <Column field="Location" header="Location"></Column>
                    <Column field="Observation" header="Observation"></Column>
                    <Column header="Action" body={actionTemplate}  />
                </DataTable>
            </div>
        </div>
    )
}

export default 
    TableForm
