import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  //Filter
  const filterValue = searchParams.get("discount") || "all";

  let fliteredCabins;

  if (filterValue === "all") fliteredCabins = cabins;
  if (filterValue === "no-discount")
    fliteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    fliteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  //SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [ field, direction ] = sortBy.split("-");

  
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = fliteredCabins.sort((a, b) => (a[field] - b[field])*modifier) ;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
