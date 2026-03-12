"use client";

import { useGetExpensesByCategoryQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import numeral from "numeral";

const columns: GridColDef[] = [
  { field: "expenseByCategorySummaryId", headerName: "ID", width: 90 },
  { field: "category", headerName: "Categoría", width: 150 },
  {
    field: "amount",
    headerName: "Monto",
    width: 150,
    renderCell: (params) => `$${numeral(params.value).format("0,0.00")}`,
  },
  {
    field: "date",
    headerName: "Fecha",
    width: 200,
    renderCell: (params) => new Date(params.value).toLocaleDateString(),
  },
];

const Expenses = () => {
  const { data: expenses, isError, isLoading } = useGetExpensesByCategoryQuery();

  if (isLoading) {
    return <div className="py-4 text-center">Cargando...</div>;
  }

  if (isError || !expenses) {
    return (
      <div className="text-center text-red-500 py-4">
        Error al obtener gastos
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <Header name="Gastos por Categoría" />
      <div className="mt-5 h-[600px] w-full">
        <DataGrid
          rows={expenses}
          columns={columns}
          getRowId={(row) => row.expenseByCategorySummaryId}
          checkboxSelection
          className="bg-white shadow rounded-lg border border-gray-200 !text-gray-700"
        />
      </div>
    </div>
  );
};

export default Expenses;
