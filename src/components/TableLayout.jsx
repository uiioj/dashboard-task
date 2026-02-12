function TableLayout({
  name,
  finishDate,
  client,
  price,
  children,
  status,
  buttonBg,
}) {
  return (
    <tr className="hover:bg-[#faf7f7]">
      {/**محتويات العمود الواحد */}

      {/**العمود الأول */}
      <td className="border border-gray-200  p-3 whitespace-nowrap">{name}</td>
      {/**العمود الثاني */}
      <td className="border border-gray-200  p-3 whitespace-nowrap">
        {finishDate}
      </td>
      {/**العمود الثالث */}
      <td className="border border-gray-200  p-3 whitespace-nowrap">
        {client}
      </td>
      {/**العمود الرابع */}
      <td className="border  border-gray-200  p-3">{price}</td>
      {/**العمود الخامس */}
      <td className="border border-gray-200  p-3 ">
        <div className="flex -space-x-4 "> {children}</div>
      </td>
      {/**العمود السادس */}
      <td className="border border-gray-200">
        <div
          className={`${buttonBg} rounded-lg 
      px-1 py-0.5 m-3 gap-2
      flex items-center justify-center text-white
               whitespace-nowrap `}
        >
          {status}
        </div>
      </td>
    </tr>
  );
}

export default TableLayout;
