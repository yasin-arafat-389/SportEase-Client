/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import {
  useDeleteFacilityMutation,
  useGetAllFacilitiesQuery,
  useUpdateFacilityMutation,
} from "../../Redux/Features/Facilities/facilities.api";
import LoaderForDashboard from "./LoaderForDashboard";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import { Button, Dialog, Input, Textarea } from "@material-tailwind/react";
import { Facility } from "../../Types/Types";
import { TbFidgetSpinner } from "react-icons/tb";

const FacilityManagement = () => {
  const { data: facilities, isLoading } = useGetAllFacilitiesQuery(undefined);

  const [deletFacility] = useDeleteFacilityMutation();
  const [updateFacility, { isLoading: isUpdateFacilityLoading }] =
    useUpdateFacilityMutation();

  const handleDeleteFacility = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletFacility(id);
        toast.success("Facility deleted successfully!");
      }
    });
  };

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<Facility | null>(null);

  const [name, setName] = useState<string>(details?.name || "");
  const [description, setDescription] = useState<string>(
    details?.description || ""
  );
  const [pricePerHour, setPricePerHour] = useState<number>(
    details?.pricePerHour || 0
  );
  const [location, setLocation] = useState<string>(details?.location || "");
  const [image, setImage] = useState<string>(details?.image || "");

  const handleOpen = (details: any) => {
    setOpen(!open);
    setDetails(details);
    setName(details.name);
    setDescription(details.description);
    setPricePerHour(details.pricePerHour);
    setLocation(details.location);
    setImage(details.image);
  };

  const handleUpdateFacility = async (e: FormEvent) => {
    e.preventDefault();

    const id = details?._id;

    const payload = {
      name,
      description,
      pricePerHour,
      location,
      image,
    };

    const res = await updateFacility({ id, payload });

    if (res.data.success) {
      setOpen(!open);
      toast.success("Facility updated successfully!");
    }
  };

  if (isLoading) {
    return <LoaderForDashboard />;
  }

  return (
    <div>
      <div className="w-full py-2 bg-secondary rounded-lg">
        <h1 className="text-white text-xl text-center">All Facilites</h1>
      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {facilities?.data?.map((item: any, index: number) => (
          <div
            key={index}
            className="rounded-xl p-3 shadow-2xl hover:shadow-xl border-2 border-green-700"
          >
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt="Hotel Photo"
                className="h-[200px] w-full"
              />
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-gray-800 text-center text-xl font-bold">
                {item.name}
              </h2>

              <span className="text-lg flex justify-center items-center mt-4 font-bold text-gray-800 text-center">
                ৳ {item.pricePerHour} per hour
              </span>
            </div>

            <div
              onClick={() => handleOpen(item)}
              className="flex justify-center items-center gap-5 mt-3"
            >
              <button className="inline-block flex-1 rounded-lg bg-button p-2 px-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-button-dark sm:flex-none md:text-base">
                Edit
              </button>

              <button
                onClick={() => handleDeleteFacility(item._id)}
                className="inline-block flex-1 rounded-lg bg-red-700 p-2 px-3 text-center text-sm font-semibold text-white outline-none transition duration-100 sm:flex-none md:text-base"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={open}
        size="sm"
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="p-4">
          <h1 className="text-center text-lg text-gray-700">
            Update details for {details?.name}
          </h1>

          <form
            onSubmit={handleUpdateFacility}
            className="mt-5 flex flex-col gap-5"
          >
            <Input
              defaultValue={details?.name}
              onChange={(e) => setName(e.target.value)}
              label="Facility Name"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Textarea
              defaultValue={details?.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label="Description"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <Input
              defaultValue={details?.pricePerHour}
              value={pricePerHour}
              onChange={(e) => setPricePerHour(Number(e.target.value))}
              label="Price per hour"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Input
              defaultValue={details?.location}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Input
              defaultValue={details?.image}
              value={image}
              onChange={(e) => setImage(e.target.value)}
              label="Image"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Button
              disabled={isUpdateFacilityLoading}
              type="submit"
              className="bg-button"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {isUpdateFacilityLoading ? (
                <div className="flex gap-3 justify-center items-center text-2xl">
                  <div className="animate-spin ">
                    <TbFidgetSpinner />
                  </div>
                  <span className="text-lg">Please Wait</span>
                </div>
              ) : (
                "Update"
              )}
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default FacilityManagement;
