import React from 'react'
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from '../redux/cartItem/cartAction'

const Cart = ({ items, addQuantity, subtractQuantity, removeItem }) => {

    return (
        <>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                {items.length ? items.map(item => {
                    return (<div key={item.id} className="flex justify-between border-b-2 mb-2">
                        <div className="text-lg py-2">
                            <p>{item.title}</p>
                        </div>
                        <div className="text-lg py-2">
                            <div
                                className="flex flex-row space-x-2 w-full items-center rounded-lg"
                            >
                                <button
                                    className="focus:outline-none bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => { removeItem(item.id) }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4"
                                    > <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z" /> </g> </svg>
                                </button>

                                <button
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => { subtractQuantity(item) }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M18 12H6"
                                        />
                                    </svg>
                                </button>
                                <p>{item.qty}</p>
                                <button
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => { addQuantity(item) }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>)
                }) : "No items in cart"}
                {/* <div
                    className="flex justify-center items-center text-center"
                >
                    <div className="text-xl font-semibold mx-4">
                        <p>Uniqe Items</p>
                        <p className="text-5xl">{items.length ? items.length : 0}</p>
                    </div>
                    <div className="text-xl font-semibold">
                        <p>Total Items</p>
                        <p className="text-5xl">{totalQty}</p>
                    </div>
                </div>
            </div> */}

            {/* <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">{total !== 0 ? new Intl.NumberFormat('us-BD', { style: 'currency', currency: 'BDT' }).format(total) : 0}</p>
                    </div>
                </div>*/}
            </div> 

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem: (id) => dispatch(removeItem(id)),
        addQuantity: (item) => dispatch(addQuantity(item)),
        subtractQuantity: (item) => dispatch(subtractQuantity(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart) 