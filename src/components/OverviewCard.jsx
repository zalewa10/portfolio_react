const OverviewCard = ({ imgURL, label }) => {
  return (
    <div className="card min-h-[180px] min-w-[170px]">
      <div className="card2 p-8 flex flex-col items-center rounded-lg min-h-[180px] min-w-[170px]">
        <img src={imgURL} alt="opis" width={72} height={72} />
        <p className="text-white mt-8 text-xl font-md">{label}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
