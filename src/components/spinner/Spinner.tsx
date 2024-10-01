const Spinner = () => {
  return (
    <div className="flex gap-1 justify-center items-center h-screen w-screen">
      <div className="w-4 h-4 rounded-full animate-pulse bg-slate-900"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-slate-900"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-slate-900"></div>
    </div>
  );
};

export default Spinner;
