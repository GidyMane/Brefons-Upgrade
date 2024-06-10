import { useSession } from "next-auth/react";

const UserInfo =  () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-start items-center">
      <div className="px-4 py-2 bg-muted flex items-start justify-start gap-2">
        <p className="text-sm font-semibold text-black tracking-tight leading-tight">
          Level:
        </p>
        <p className="text-sm font-semibold text-primary tracking-tight leading-tight">
          {session?.user?.levels}
        </p>
      </div>
      <div className="px-4 py-2 bg-muted flex items-start justify-start gap-2">
        <p className="text-sm font-semibold text-black tracking-tight leading-tight">
          County:
        </p>
        <p className="text-sm font-semibold text-primary tracking-tight leading-tight">
          {session?.user?.station}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
