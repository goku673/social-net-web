"use client"
import React from "react"
import { Button } from "./common/button";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="bg-white  rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Sugerencias para ti</h2>
      {[1, 2, 3].map((friend) => (
        <div key={friend} className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Image
            width={100}
            height={100}
              className="h-10 w-10 rounded-full"
              src={`https://i.pravatar.cc/150?img=${friend + 3}`}
              alt={`Usuario Sugerido ${friend}`}
            />
            <div>
              <p className="font-medium">Usuario Sugerido {friend}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">5 amigos en común</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Seguir
          </Button>
        </div>
      ))}
    </div>
  )
}

export default RightSidebar