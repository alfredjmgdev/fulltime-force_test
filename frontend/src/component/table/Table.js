import { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://192.168.0.117:3000/github")
      .then((response) => response.json())
      .then(function (data) {
        console.log(data)
        setData(data)
      });
  };

  return (
    <div id="app" className="min-h-screen text-gray-700 subpixel-antialiased p-8 bg-gray-700">
      <div className="container space-y-8 text-sm mx-auto">
        <div className="space-y-2">
          <div className="text-gray-200">FulltimeForce Test (Github commits History!)</div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-4 mx-auto block"
            onClick={fetchData}
          >
            Refresh
          </button>
          <div className="bg-white shadow-lg hover:shadow-xl rounded-md overflow-hidden">
            <table className="table flex table-auto w-full leading-normal">
              <thead className="uppercase text-gray-600 text-xs font-semibold bg-gray-200">
                <tr className="hidden md:table-row">
                  <th className="text-left p-3 w-auto">
                    <p>Username</p>
                  </th>
                  <th className="text-left p-3 w-auto">
                    <p>Email</p>
                  </th>
                  <th className="text-left p-3 w-auto">
                    <p>Message</p>
                  </th>
                  <th className="text-right p-3 w-auto">
                    <p>Date</p>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="flex-1 text-gray-700 sm:flex-none">
                {data.map((item) => (
                  <tr className="border-t first:border-t-0 flex p-1 md:p-3 hover:bg-gray-100 md:table-row flex-col w-full flex-wrap break-words">
                    <td className="p-1 md:p-3 w-auto">
                      <label className="text-xs text-gray-500 uppercase font-semibold md:hidden" for="">Username</label>
                      <p className="">{item.username}</p>
                    </td>
                    <td className="p-1 md:p-3 w-auto">
                      <label className="text-xs text-gray-500 uppercase font-semibold md:hidden" for="">Email</label>
                      <p className="">{item.email}</p>
                    </td>
                    <td className="p-1 md:p-3 w-auto">
                      <label className="text-xs text-gray-500 uppercase font-semibold md:hidden" for="">Message</label>
                      <p className="">{item.message}</p>
                    </td>
                    <td className="p-1 md:p-3 md:text-right w-auto">
                      <label className="text-xs text-gray-500 uppercase font-semibold md:hidden" for="">Date</label>
                      <div>{item.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Table;