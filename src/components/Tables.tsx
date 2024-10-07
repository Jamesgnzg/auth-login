import { Table } from "flowbite-react";

interface AppTableProps {
  headers: string[];
  data: any[];
}

const AppTable = ({ headers, data }: AppTableProps) => {
  const generateTableHeaders = (tableHeaders: string[]): React.ReactElement => {
    return (
      <Table.Head>
        {tableHeaders.map((header, index) => (
          <Table.HeadCell key={index}>{header}</Table.HeadCell>
        ))}
      </Table.Head>
    );
  };

  const generateTableRows = (tableRows: any[]): React.ReactElement => {
    return (
      <>
        {tableRows.map((row, index) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            {Object.keys(row).map((field, index) => {
              return <Table.Cell key={index}>{row[field]}</Table.Cell>;
            })}
          </Table.Row>
        ))}
      </>
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        {generateTableHeaders(headers)}
        <Table.Body className="divide-y">{generateTableRows(data)}</Table.Body>
      </Table>
    </div>
  );
};

export default AppTable;
