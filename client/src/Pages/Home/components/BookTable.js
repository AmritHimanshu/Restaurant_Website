/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const BookTable = () => {
    const [noOfGuests, setNoOfGuests] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [mealType, setMealType] = useState("Breakfast");
    const [message, setMessage] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        /*

        const data = new FormData();
        data.set("noOfGuests", noOfGuests);
        data.set("bookingDate", bookingDate);
        data.set("mealTyle", mealType);
        data.set("message", message);

        console.log(data);


        const response = await fetch("api/endpoint/link", {
            method: "GET"/"POST"/"PUT/"DELETE",
            body: data,
            credentials: "included",
        });
        
        */
    }

    return (
      <form
        className="flex flex-col space-y-[10px] xl:w-[400px]"
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          name="number"
          placeholder="Number of guests"
          value={noOfGuests}
          required
          className="outline-0 p-2 border-2 border-gray-600 text-md xl:text-lg w-full placeholder:text-sm"
          onChange={(ev) => setNoOfGuests(ev.target.value)}
        />
        <div className='flex min-w-[100%] space-x-5'>
          <input
            type="date"
            name="date"
            value={bookingDate}
            required
            className="outline-0 p-2 border-2 border-gray-600 text-md xl:text-lg w-full placeholder:text-sm"
            onChange={(ev) => setBookingDate(ev.target.value)}
          />
          <select
            name="mealtype"
            id=""
            value={mealType}
            required
            className="outline-0 p-2 border-2 border-gray-600 text-md xl:text-lg w-full placeholder:text-sm"
            onChange={(ev) => setMealType(ev.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <textarea
          placeholder="Message"
          name="message"
          value={message}
          className="outline-0 p-2 border-2 border-gray-600 text-md xl:text-lg w-full resize-none rounded-none placeholder:text-sm"
          onChange={(ev) => setMessage(ev.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-5 p-3 xl:p-5 bg-blue text-center text-md xl:text-xl text-gray-200 font-bold rounded-md hover:bg-white hover:text-blue duration-300 cursor-pointer"
        >
          Book Now
        </button>
      </form>
    );
}

export default BookTable