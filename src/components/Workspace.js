const workspaces = [
    { initial: 'D', name: 'Dstudio space' },
    { initial: 'T', name: 'Team space' },
    { initial: 'C', name: 'CO space' }
  ]
  
  export default function Workspace() {
    return (
      <div className="shadow-md p-4 bg-white rounded-xl">
        <h2 className="font-semibold text-xl">Workspace</h2>
  
        <div className="flex gap-4 mt-4 justify-center">
          {workspaces.map((workspace, index) => (
            <div key={index} className="flex items-center p-4 border border-gray-300 w-68 rounded-xl gap-4 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h1 className="text-gray-300 bg-gray-500 text-2xl px-4 py-2 rounded">
                {workspace.initial}
              </h1>
              <div>
                <span className="text-xs text-gray-600">Workspace</span>
                <h2 className="font-medium">{workspace.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }