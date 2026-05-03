export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm z-50 fixed inset-0">
            <span className="loading loading-spinner loading-xl text-[#003D4C]"></span>
        </div>
    );
}
