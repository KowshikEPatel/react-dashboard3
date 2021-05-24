import Card from './Card'

export default function Dashboard(){
  const boardData=[
    {
      name:"Earnings(Monthly)",
      currency:"$",
      value:"40000",
      icon:"fa fa-calendar-o fa-2x"
    },
    {
      name:"Earnings(Yearly)",
      currency:"$",
      value:"40000",
      icon:"fa fa-usd fa-2x"
    },
    {
      name:"Tasks",
      currency:"",
      value:"50%",
      icon:"fa fa-tasks fa-2x"
    },
    {
      name:"Pending (Requests)",
      currency:"",
      value:"18",
      icon:"fa fa-comments fa-2x"
    }
  ]
    return <>
            <div  className="row">
            {
            boardData.map((obj)=>{
            return <Card title={obj.name} currency={obj.currency} value={obj.value} icon={obj.icon}></Card>
            })
            
            }
            </div>
        </>
}