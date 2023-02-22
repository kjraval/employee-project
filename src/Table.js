import React from "react";

export default class Table extends React.Component {
constructor(){
    super();
    this.state = {
        data: []
    }
}






    componentDidMount(){

        let e = localStorage.getItem("employee") || [];
        try{
        let data = JSON.parse(e);
        
        this.setState({ data })
        }catch(e){
            this.setState({ data:[] })

        }
    }

    remove(data) {

        let allData = JSON.parse(localStorage.getItem("employee")) || [];

        let index = allData.findIndex(e => e.code === data.code)
        allData[index].isActive = false;


        localStorage.setItem("employee", JSON.stringify(allData));

        this.setState({data:allData})
        alert(`Successfully Removed Employee`)

    }


    render(){
        return(
            <>
            
<div class="relative overflow-x-auto bg-neutral-900">
    <table class="w-full text-sm text-left text-white dark:text-gray-400">
        <thead class="text-xs text-white uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Employee Code
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                   Email
                                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                    City
                </th>
                <th scope="col" class="px-6 py-3">
                    Joinning Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Salary
                </th>
                                <th scope="col" class="px-6 py-3">
                                    Remove Employee
                                </th>
            </tr>
        </thead>
        <tbody>

                            {this.state.data.map((data) => {
                                return <>
                                    {data.isActive === true ?
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700">        
                <td class="px-6 py-4">
                                {data.code}
                </td>
                <td class="px-6 py-4">
                                {data.name}
                </td>
              
                <td class="px-6 py-4">
                                {data.email}
                </td>

                <td class="px-6 py-4">
                                {data.contact}
                </td>

                            <td class="px-6 py-4">
                                {data.city}
                </td>

                            <td class="px-6 py-4">
                                {data.joinningDate}
                </td>

                <td class="px-6 py-4">
                                {data.salary}
                </td>



                <td class="px-6 py-4">
                                <button onClick={() => { this.remove(data) }} class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                    Remove
                                </button>
                </td>

                        </tr>

                        :
                        null
                    }
                </>
            })
                            }

                        </tbody>
    </table>
</div>

            
            
            
            
            
            
            
            
            
            
            </>
        )
    }
}