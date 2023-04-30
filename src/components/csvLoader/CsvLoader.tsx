import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Papa from "papaparse";
import upload from "../../assets/upload.jpg";
import Table from "../table/Table";
import { useDispatch } from "react-redux";
import { setEmployeeData } from "../../store/slice/dataSlice";

const CSVLoader = () => {
  const dispatch = useDispatch();
  const [data, setdData] = useState<any>([]);
  const [showButoon, setShowButoon] = useState(false);
  useEffect(() => {
    FilteredList();
  }, [data]);

  const Button = styled.button`
    border: none;
    background-color: #5a8dfa;
    color: #ffffff;
    font-size: 18px;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
  `;
  const imageRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (imageRef.current && imageRef.current.files) {
      const file = imageRef.current.files[0];
      Papa.parse(file, {
        header: true,
        complete: (result: { data: any }) => {
          setdData(result.data);
          setShowButoon(true);
        },
      });
    }
  };

  const FilteredList: any = () => {
    if (Array.isArray(data)) {
      const filteredItems = data.filter(
        (item: { [x: string]: string }) =>
          item["Nivel Jerárquico"] === "Manager"
      );
      // console.log(filteredItems);
      return filteredItems;
    }
  };

  const handleUpdateData = () => {
    dispatch(setEmployeeData(data));
  };

  return (
    <div>
      <div>
        <input
          type="file"
          accept={upload}
          ref={imageRef}
          onChange={handleFileUpload}
        />
        {showButoon && <Button onClick={handleUpdateData}>Subir datos</Button>}
      </div>
      <Table data={data} />
    </div>
  );
};

export default CSVLoader;
