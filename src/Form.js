import React from "react";
export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            code: "",
            name: "",
            email: "",
            contact: "",
            city: "",
            joinningDate: "",
            salary: ""
        }
    }

    componentDidMount() {

        let data
        try{
        data = JSON.parse(localStorage.getItem("employee")) || [];
        }catch(e){
            data = []
        }



        let key = localStorage.getItem("key");
        if (!key) localStorage.setItem("key", Number(1));

        if(!data && !data.length){

        this.setState({ code: localStorage.getItem("key") })
        } else {

            let unUsedData = data.find(ele => ele.isActive === false)

            this.isUnusedData = true;
            this.data = data.findIndex(ele => ele.code == unUsedData.code)
           if(unUsedData){
            this.setState({ code: unUsedData.code })
        } else {
            this.setState({ code: localStorage.getItem("key") })

        }


        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let data
        try{
        data = JSON.parse(localStorage.getItem("employee")) || [];
        }catch(e){
            data = []
        }
        let { code, name, email, contact, city, joinningDate, salary } = this.state








        data.push({ code, name, email, contact, city, joinningDate, salary,isActive:true })

        let newData = JSON.stringify(data)
        localStorage.setItem("employee", newData);
        
        let key = Number(localStorage.getItem("key"));
        localStorage.setItem("key", key + 1);
        this.setState({ code: localStorage.getItem("key"), name: "", email: "", contact: "", city: "", salary: "", joinningDate: "" })

        alert("successfully created!")
        console.log(this.state)
    }

    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value });
    }

    reset(){
        this.setState({ code: localStorage.getItem("key"), name: "", email: "", contact: "", city: "", salary: "", joinningDate: "" })

        console.log(this.state)

    }
    render() {
        console.log(this.state)
        return (
            <>
                <div className="bg-neutral-900" >


                    <div
                        className="py-20 px-6 text-center text-white">
                        <h1 className="mb-6 text-5xl font-bold">Create new Employee</h1>
                    </div>



                    <form className="mx-[250px] p-10" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="relative z-0 w-full mb-6 group ">
                            <input disabled defaultValue={this.state.code} onChange={(e) => this.handleChange(e)} type="number" name="code" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
                            <label className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employee Code</label>
                        </div>



                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={this.state.name} onChange={(e) => this.handleChange(e)} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" required />
                                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={this.state.email} onChange={(e) => this.handleChange(e)} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" required />
                                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Adress</label>
                            </div>
                        </div>



                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={this.state.contact} onChange={(e) => this.handleChange(e)} maxLength={10} type="text" name="contact" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={this.state.city} onChange={(e) => this.handleChange(e)} type="text" name="city" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={this.state.joinningDate} name="joinningDate" onChange={(e) => this.handleChange(e)} type="date" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
                                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Joinning Date</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={this.state.salary} onChange={(e) => this.handleChange(e)} type="number" name="salary" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary</label>
                            </div>
                        </div>









                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                   
                        <button onClick={()=>{this.reset()}} type="button"  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reset</button>
                   
                     </form>
                </div>

            </>
        )
    }
}