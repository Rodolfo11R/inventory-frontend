"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Nombre", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4 text-center">Cargando...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">
        Error al obtener usuarios
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <Header name="Usuarios" />
      <div className="mt-5 h-[600px] w-full">
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.userId}
          checkboxSelection
          className="bg-white shadow rounded-lg border border-gray-200 !text-gray-700"
        />
      </div>
    </div>
  );
};

export default Users;
