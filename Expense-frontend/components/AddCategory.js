"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Bone,
  Box,
  Check,
  DollarSign,
  Fingerprint,
  House,
  Image,
  Plus,
} from "lucide-react";
import { useState } from "react";

const categoryIcons = [
  {
    name: "home",
    Icon: House,
  },
  {
    name: "Fingerprint",
    Icon: Fingerprint,
  },
  {
    name: "image",
    Icon: Image,
  },
  {
    name: "dollar-sign",
    Icon: DollarSign,
  },
  {
    name: "bone",
    Icon: Bone,
  },
  {
    name: "box",
    Icon: Box,
  },
];

const categoryColors = [
  {
    name: "blue",
    value: "#0166FF",
  },
  {
    name: "sky",
    value: "#01B3FF",
  },
  {
    name: "green",
    value: "#41CC00",
  },
  {
    name: "yellow",
    value: "#F9D100",
  },
  {
    name: "orange",
    value: "#FF7B01",
  },
  {
    name: "purple",
    value: "#AE01FF",
  },
];

export function AddCategory() {
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState("");

  function createNew() {
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        icon: icon,
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }

  const [categories, setCategories] = useState([]);

  function loadList() {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA", data);
        setCategories(data);
      });
  }

  console.log({ color, icon, name });
  return (
    <main>
      {categories.map((a) => (
        <div>{a.name}</div>
      ))}
      <Dialog>
        <DialogTrigger asChild className="flex gap-2">
          <button variant="outline">
            <Plus className="text-[#0166FF]" /> Add Category
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
          </DialogHeader>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <Popover>
            <div className="flex">
              <PopoverTrigger asChild className="w-[48px] my-auto">
                <House />
              </PopoverTrigger>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <PopoverContent className="w-80">
              <div className="flex grid-cols-6 gap-5 justify-between">
                {categoryIcons.map(({ name, Icon }) => (
                  <div
                    key={name}
                    onClick={() => setIcon(name)}
                    className={`${icon === name ? `bg-blue-300` : ``}`}
                  >
                    <Icon />
                  </div>
                ))}
              </div>
              <div className="flex grid-cols-6 gap-5 justify-between">
                {categoryColors.map(({ name, value }) => (
                  <div
                    key={name}
                    onClick={() => setColor(name)}
                    className="w-7 h-7 rounded-full items-center justify-center text-white text-sm flex mt-[50px]"
                    style={{ backgroundColor: value }}
                  >
                    {color === name && <Check />}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-[#16A34A] rounded-full hover:bg-green-900"
              onClick={createNew}
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
