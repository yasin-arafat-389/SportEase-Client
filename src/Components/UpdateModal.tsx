const UpdateModal = () => {
  return (
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
            type="number"
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
  );
};

export default UpdateModal;
