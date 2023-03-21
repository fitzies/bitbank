export default function Box(props: { data: { title: string; text: string } }) {
  return (
    <div className="w-11/12 aspect-video bg-[#3a0f778c] rounded-lg mt-4 mx-auto hover:-translate-y-1 duration-150 flex flex-col border-2 border-[#4E2783]">
      <div className="w-full h-1/4 rounded-lg rounded-b-none bg-[#4E2783] flex items-center justify-start px-8">
        <h1 className="text-bb-light font-interbold text-xl">
          {props.data.title}
        </h1>
      </div>
      <p className="text-[#e2e2e2] font-inter p-4 px-6">{props.data.text}</p>
    </div>
  );
}
