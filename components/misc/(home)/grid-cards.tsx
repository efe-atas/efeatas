import {
  BooksCard,
  GHLink,
  GHStats,
  ImagesCard,
  LinksCard,
  StacksCard,
} from "@/components/misc/(home)/cards";

import { YearProgressCard } from "@/components/misc/(home)/cards/deneme-card";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
        <div className="col-span-3">
          <GHLink />
        </div>
        <div className="col-span-2">
          <GHStats issues={0} prs={0} followers={0} stars={0} />
        </div>
        {/* Deneme Card burada */}
        <div className="col-span-1">
          <YearProgressCard />
        </div>
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 mt-3">
        <div className="flex flex-col col-span-3">
          <div className="flex flex-col gap-3 w-full ">
            <LinksCard />
          </div>
          <div className="cols-span-3 ">
            <StacksCard />
          </div>
        </div>

        <div className="col-span-3 md:ml-3">
          <div className="flex gap-3 ">
            <ImagesCard />
          </div>
          <BooksCard />
        </div>
      </div>
    </div>
  );
};
