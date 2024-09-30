import { Table } from "flowbite-react";

const AppTable = () => {
  const generateTableHeaders = () => {
    return (
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
    );
  };

  const generateTableRows = () => {
    return (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Magic Mouse 2
        </Table.Cell>
        <Table.Cell>Black</Table.Cell>
        <Table.Cell>Accessories</Table.Cell>
        <Table.Cell>$99</Table.Cell>
        <Table.Cell>
          <a
            href="#"
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        {generateTableHeaders()}
        <Table.Body className="divide-y">{generateTableRows()}</Table.Body>
      </Table>
    </div>
  );
};

export default AppTable;
