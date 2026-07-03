'use client'

import { useState } from "react"
export default function SearchBar({onSearch,loading}){
  const [city,setCity]=useState('');
  const handleSubmit=(e)=>{
     e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  }

 return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-800"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? '...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
