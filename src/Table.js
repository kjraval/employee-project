import React from "react";

export default class Table extends React.Component {
constructor(){
    super();
}






    componentDidMount(){

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
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Silver
                </td>
              
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">
                    Silver
                </td>
              <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="dark:bg-gray-800">
            <td class="px-6 py-4">
                    Silver
                </td>
                  <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

            
            
            
            
            
            
            
            
            
            
            </>
        )
    }
}