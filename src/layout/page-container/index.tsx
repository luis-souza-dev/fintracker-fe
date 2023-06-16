import React from "react";

function PageContainer({ children }: React.PropsWithChildren) {
    return (
        <section className="h-[90%] w-full flex justify-center gap-x-7 items-center">
            { children }
        </section>
    )
}

export default PageContainer;
  