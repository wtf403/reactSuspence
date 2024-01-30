const Skeleton = () => {
  return (
    <>
      <div className="loader w-[256px] h-[97px] bg-gray-50 rounded-xl "></div>
      <style>{`
            .loader{
                  background:  linear-gradient(to right, #f8fafc, #f1f5f9, #e2e8f0, #f1f5f9, #f8fafc);
                  background-size: 200%;
                  background-position: left;
                  animation: load 1s ease-out 0s infinite normal;
            }
            @keyframes load {
              0%, 100%{
                    background-position: right;
                }
              50%{
                  background-position: left;
              }
            }
        `}</style>
    </>
  );
};

export default Skeleton;
