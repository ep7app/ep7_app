import { ReactNode } from "react";

type ILayout = {
  child?: ReactNode;
}

export const Layout = (props: any) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 bg-[#FAFAFA] px-8 py-12">
      {props.children}
    </div>
  );
};
