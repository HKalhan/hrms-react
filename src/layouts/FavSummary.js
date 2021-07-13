import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';


export default function FavSummary() {

  const {favItems} = useSelector(state => state.fav)

    return (
        <div>
            <Dropdown item text="Favorileriniz">
              <Dropdown.Menu>
                {
                  favItems.map((favItem)=>(
                    <Dropdown.Item key={favItem.jobAdvert.id}>
                      {favItem.jobAdvert.id}
                      <Label>
                        {favItem.quantity}
                      </Label>
                    </Dropdown.Item>
                  ))
                }
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/fav">Favorilere git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}