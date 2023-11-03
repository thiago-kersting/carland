import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

const SearchMobile = () => {
    return (
        <div className="xl:hidden font-medium">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-4">
                    {/* location Selection */}
                    <LocationSelection />
                    {/* date Selection */}
                    <DateSelection />
                    {/* hours selection */}
                    <HoursSelection />
                </div>
                <div className="flex items-center px-6 mt-4">
                    <button className="btn btn-sm btn-accent w-[164px] mx-auto">Search</button>
                </div>
            </div>
        </div>
    );
}
 
export default SearchMobile;