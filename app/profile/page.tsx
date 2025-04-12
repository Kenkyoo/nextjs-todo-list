import HankoProfile from "@/components/hankoComponents/profile";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col justify-center justify-items-center items-center gap-2 py-4">
        <h1 className="text-5xl font-bold my-4">Hanko Profile</h1>
        <div className="max-w-96 bg-base-200 border border-gray-200 rounded-lg shadow mx-auto">
          <HankoProfile />
        </div>
      </div>
    </>
  );
}
