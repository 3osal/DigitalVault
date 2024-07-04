const MainTitle = ({lable}) => {
  return (
    <div className="mb-4 relative">
      <span className="absolute left-[-5px] bottom-0 bg-mainColor w-[5px] h-[15px]"></span>
        <span className="text-primary font-bold text-2xl capitalize">{lable}</span>
    </div>
  )
}

export default MainTitle