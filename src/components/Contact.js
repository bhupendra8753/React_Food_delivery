const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us Page</h1>
      <form className="text-center">
        <input type="text" placeholder="name" className="border border-black p-2 m-2 rounded-lg" />
        <input type="text" placeholder="message" className="border border-black p-2 m-2 rounded-lg" />
        <button className="border border-black p-2 m-2 rounded-lg bg-green-400">Submit</button>
      </form>
    </div>
  );
};
export default Contact;