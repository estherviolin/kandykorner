import React, { useContext } from "react"
import { ProductContext } from "../product/ProductProvider"


export const InventorySearch = () => {
    const { setTerms } = useContext(ProductContext)

    return (
        <>
            Inventory search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setTerms(keyEvent.target.value)
                }
                placeholder="Search our inventory... " />
        </>
    )
}