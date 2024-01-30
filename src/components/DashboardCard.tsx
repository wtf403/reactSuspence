// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-next
import { use } from "react";

type ApiResponse = {
  followers: number;
  new: number;
  delay: number;
};

const DashboardCard = ({ icon, name }: { icon: string; name: string }) => {
  const data = use(
    fetch(`/src/assets/api/${name}.json`)
      .then((res) => res.json())
      .then(
        (data) =>
          new Promise<ApiResponse>((resolve) =>
            setTimeout(() => resolve(data), data.delay)
          )
      )
  );

  console.log(data);

  return (
    <div className="w-64 border rounded-xl shadow-xl p-4 bg-white flex gap-3">
      <img width={64} height={64} src={icon} />
      <div className="flex flex-col items-start gap-1">
        <h3 className="font-medium text-gray-400">Followers</h3>
        <div className="flex gap-2 items-end">
          <p className="text-2xl font-bold">{data?.followers ?? "–"}</p>
          <p className="text-green-500 font-bold">💚 {data?.new ?? "–"}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
