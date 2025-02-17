import Header from "./Header";

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const user = { name, email }
        console.log(user)
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-3xl text-center my-10 font-bold'>User Managment Crud Client</h1>
            <div className='container mx-auto my-10'>
                <div className="card max-w-xl mx-auto bg-gray-200">
                    <div className="card-body">
                        <form onSubmit={handleAddUser}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input w-full focus:outline-none" placeholder="Your Name" name='name' />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-full focus:outline-none" placeholder="Your Email" name='email' />
                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                <button className="btn btn-neutral mt-4">Add User</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddUser;