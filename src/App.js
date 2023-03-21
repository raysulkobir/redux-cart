import { Provider } from "react-redux";
import Cart from './components/Cart';
import Products from './components/Products';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid place-items-center">
        <h1
          className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
        >
          Shopping Cart
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div
          className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
        > 
          <Products />
        </div>
        <div
          className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
          <Cart />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
