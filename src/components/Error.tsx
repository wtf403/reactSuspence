import Base from "@/components/Base";
const Error = ({ message = "Error loading content" }: { message: string }) => {
  return (
    <Base>
      <div className=" text-red-500 font-bold text-center">{message}</div>
    </Base>
  );
};

export default Error;
