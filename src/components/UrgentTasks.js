const projects = [
    { name: 'Project 1', progress: 80 },
    { name: 'Project 2', progress: 60 },
    { name: 'Project 3', progress: 40 },
    { name: 'Project 4', progress: 20 }
  ]
  
  export default function UrgentTasks() {
    return (
      <div className="shadow-md p-4 bg-white rounded-xl">
        <h2 className="font-semibold text-xl">Urgently Task</h2>
  
        <table className="w-full border-collapse mt-4">
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td className="w-20 whitespace-nowrap font-semibold py-1 cursor-pointer">
                  {project.name}
                </td>
                <td>
                  <div className="w-full h-2 bg-gray-200 rounded overflow-hidden relative">
                    <div 
                      className="h-full bg-black rounded"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>
                <div className="text-sm text-black flex justify-between mt-2">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }