# 1. JSX, Component, Props

- _Định nghĩa_:
  JSX (JavaScript XML) là một phần mở rộng của JavaScript, cho phép viết HTML-like trong các components của React. Nó là cú pháp cho phép bạn viết code dễ đọc và viết UI components một cách rõ ràng và trực quan hơn.

Example:

```JavaScript
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}
```

- _Javascript Expression_: Chúng ta có thể sử dụng Javascript expressions bên trong JSX bằng cách đặt chúng trong dấu {}.
  Example:
  `{variableName}`

- _Component_: component là một phần của giao diện người dùng (UI) mà chúng ta có thể tái sử dụng. Nó đóng vai trò như các khối xây dựng chính của ứng dụng React, cho phép chúng ta chia UI thành các phần nhỏ hơn, dễ quản lý và tái sử dụng. có hai loại component chính đó là Class Component và Functional Component.

- _Props_: là một đối tượng chứa các thông tin được truyền từ component cha đến component con. Chúng được sử dụng để truyền dữ liệu từ component cha xuống các component con và giúp các component này có thể tương tác với nhau.
  - Props là read-only trong component nhận nó. Nghĩa là chúng ta không thể thay đổi giá trị của Props bên trong component đó trực tiếp. Props là immutable. Tuy nhiên, chúng ta có thể sử dụng props để thay đổi trạng thái hoặc behavior của component thông qua state
  - Props có thể được truyền vào component con thông qua props. Và component con nhận props là một tham số. Ta dùng syntax `props.variableName` để hiển thị giá trị đó.

# 2.Hooks

- _Định nghĩa_: Hooks trong React là các hàm đặc biệt mà cho phép bạn sử dụng các tính năng của React như state, lifecycle methods, context, và side-effects trong các functional components.

**_useState_**

- `useState()`: Cho phép bạn sử dụng state trong functional components. Nó trả về một cặp giá trị là giá trị state hiện tại và một hàm để cập nhật state đó.
- _Syntax_:
  `const [state, setState] = useState(initialState);`
- Trong đó:
  - `state` : là giá trị hiện tại của state
  - `setState`: là hàm để cập nhật giá trị của state
  - `initialState`: là giá trị ban đầu của state
- Example:

```JavaScript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

- _Lưu ý_: **Ngoài giá trị ban đầu, useState cũng có thể nhận vào một callback function để tính toán giá trị ban đầu dựa trên logic phức tạp hoặc dữ liệu hiện có. Điều này hữu ích khi giá trị ban đầu của state cần phải được tính toán hoặc lấy từ các nguồn dữ liệu bất đồng bộ.**
- _Example_:

```JavaScript
const [data, setData] = useState(() => fetchDataFromAPI());
```

**_useEffect_**

- _Định nghĩa_: là một trong những hooks quan trọng nhất trong React, cho phép bạn thực hiện các side-effect trong functional components. Side-effect có thể là những hành động như gọi API, thao tác với DOM, đăng ký sự kiện, và nhiều hành động khác mà không liên quan trực tiếp đến việc render giao diện người dùng.

- useEffect trong React được sử dụng để thực hiện các side-effect trong functional components. Các side-effect là các hành động không thuộc về việc render UI, như gọi API, thao tác với DOM, đăng ký sự kiện, và các hành động tương tự.

- Có một số mục đích chính khi sử dụng useEffect:

  - Gọi API và Thao tác với Dữ liệu Bất Đồng Bộ: Bạn có thể sử dụng useEffect để gọi API từ máy chủ và nhận dữ liệu. Sau khi dữ liệu được nhận, bạn có thể cập nhật state của component để render dữ liệu mới.

  - Thao tác với DOM: useEffect cũng cho phép bạn thực hiện các thay đổi trên DOM sau khi component được render. Ví dụ, thêm hoặc xoá các elements, thay đổi thuộc tính của elements.

  - Đăng Ký và Huỷ Đăng Ký Sự Kiện: Nếu bạn cần theo dõi sự kiện DOM hoặc các sự kiện khác, bạn có thể sử dụng useEffect để đăng ký các bộ xử lý sự kiện và sau đó huỷ đăng ký khi component bị xoá.

  - Quản Lý Subscriptions: Trong các ứng dụng sử dụng các thư viện quản lý trạng thái hoặc realtime data, bạn có thể sử dụng useEffect để đăng ký và huỷ đăng ký các subscriptions khi component mount và unmount.

  - Tương tác với Lifecycle của Component: useEffect cung cấp khả năng tương đương với lifecycle methods trong class components của React như componentDidMount, componentDidUpdate, và componentWillUnmount.

  - Điều quan trọng là useEffect cho phép bạn tách biệt các side-effect khỏi logic của render, giúp code của bạn trở nên dễ đọc, dễ bảo trì và hiệu quả hơn trong việc quản lý lifecycle và side-effects trong React components.

- _Syntax_:

```JavaScript
useEffect(() => {
  // Logic for side-effects goes here
  // This will run after every render by default

  // Return cleanup function if needed
  return () => {
    // Cleanup logic here
  };
}, [/* dependency array */]);

```

- _Trong đó_:
  - Callback Function: Đây là nơi bạn đặt logic cho các side-effects. Nó sẽ được thực thi sau mỗi lần render, trừ khi bạn kiểm soát điều này bằng cách sử dụng dependency array.
  - Dependency Array: Là một mảng chứa các dependencies (phụ thuộc). Khi một trong những giá trị trong mảng thay đổi so với lần render trước, callback function sẽ được gọi lại. Nếu bạn muốn useEffect chạy chỉ một lần khi component được render lần đầu tiên, bạn có thể truyền một mảng rỗng [].
  - Cleanup Function: Nếu cần, bạn có thể trả về một cleanup function từ callback function của useEffect. Điều này thường được sử dụng để huỷ bỏ các subscriptions hoặc dọn dẹp tài nguyên không cần thiết.
- Example:

```JavaScript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        // Xử lý lỗi
      }
    };

    fetchData();

    // Cleanup function (nếu cần thiết)
    return () => {
      // Thực hiện dọn dẹp nếu cần
    };
  }, []); // Mảng rỗng để chạy chỉ một lần khi mount

  return (
    <div>
      {/* Hiển thị dữ liệu */}
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

```

- _Lưu ý_:
  - **Nếu không có dependencies: useEffect sẽ chạy lại sau mỗi lần render**
  - **Nếu dependencies là một mảng rỗng: useEffect sẽ chạy một lần sau khi component được mount lần đầu tiên.**
  - **Nếu dependencies là một mảng có giá trị: callback function của useEffect sẽ được gọi lại mỗi khi giá trị trong dependencies thay đổi**

**_useLayoutEffect_**

- _Định nghĩa_: là một trong những hooks trong React tương tự như useEffect, nhưng nó được gọi đồng bộ với việc thay đổi DOM, ngay trước khi các visual updates được render ra màn hình.
- _Syntax_:

```JavaScript
useLayoutEffect(() => {
  // Logic for side-effects or DOM manipulations goes here
  // This runs synchronously after all DOM mutations but before the browser has a chance to paint

  // Return cleanup function if needed
  return () => {
    // Cleanup logic here
  };
}, [/* dependency array */]);

```

- Sự khác biệt chính giữa useLayoutEffect và useEffect là thời điểm chạy. Trong useLayoutEffect, side-effects được thực thi ngay trước khi trình duyệt thực hiện các visual updates (vẽ lại giao diện). Điều này có thể hữu ích nếu bạn cần đảm bảo rằng các thay đổi DOM đã được áp dụng trước khi người dùng thấy bất kỳ thay đổi nào trên giao diện.

**_useRef_**

- _Định nghĩa_: là một trong những hooks trong React dùng để tạo và lưu trữ một tham chiếu không thay đổi qua các lần render của component.
- Syntax:

```JavaScript
const refContainer = useRef(initialValue);
```

- _Trong đó_:
  - refContainer : là một đối tượng ref, và thuộc tính current của nó chứa giá trị của ref.
  - initialValue : (tùy chọn) là giá trị ban đầu cho ref.
- Một trong những ứng dụng chính của useRef là thao tác trực tiếp với các elements trong DOM. Ví dụ, bạn có thể sử dụng useRef để truy cập và thay đổi thuộc tính hoặc phương thức của một element:

- _Example_:

```JavaScript
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus vào input element khi component được mount
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

```

**_React.memo_**

- _Định nghĩa_: là một hàm cao cấp trong React được sử dụng để tối ưu hóa việc render của functional components bằng cách "nhớ" kết quả của việc render trước đó và trả về kết quả đó nếu các props không thay đổi. Khi bạn sử dụng React.memo cho một functional component, nó tạo ra một phiên bản được "memoized" (nhớ kết quả) của component đó. Khi component được render, React.memo sẽ so sánh props được truyền vào component này với props trước đó. Nếu các props không thay đổi, React.memo sẽ sử dụng kết quả đã nhớ (memoized) từ lần render trước đó thay vì render lại component đó, giúp tối ưu hóa hiệu suất của ứng dụng.

- _Example_:

```JavaScript
import React from 'react';

const MyComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});

```

**_useCallback_**

- _Định nghĩa_: là một trong những hooks trong React, được sử dụng để tối ưu hóa hiệu suất bằng cách nhớ giá trị của một hàm callback, tránh việc tạo lại hàm đó mỗi khi component render lại.

- Khi bạn sử dụng useCallback, nó sẽ trả về một phiên bản của hàm callback đã được nhớ, nghĩa là nó sẽ chỉ tạo lại hàm khi các dependencies (phụ thuộc) của nó thay đổi.

- useCallback thường được sử dụng khi bạn cần truyền hàm callback vào các components con và muốn tránh render lại không cần thiết của các components đó khi các props không thay đổi. Tuy nhiên, việc sử dụng quá nhiều useCallback có thể làm tăng kích thước của mã nguồn và gây khó khăn trong việc đọc hiểu mã nguồn.

- _Syntax_:

```JavaScript
const memoizedCallback = useCallback(
  () => {
    // Callback logic
  },
  [/* dependencies */]
);

```

- _Trong đó_:

  - memoizedCallback: là hàm callback đã được nhớ.
  - `() => { // Callback logic }`: là logic của hàm callback bạn muốn nhớ.
  - `[/* dependencies */]`: là một mảng chứa các giá trị phụ thuộc. Nếu bất kỳ giá trị nào trong mảng này thay đổi, hàm callback sẽ được tạo lại. Nếu không, nó sẽ sử dụng lại hàm callback đã được nhớ từ lần render trước.

- _Example_:

```JavaScript
import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Callback được nhớ lại chỉ khi `count` thay đổi
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

```

Trong ví dụ này, increment là một hàm callback được tạo lại chỉ khi count thay đổi. Điều này giúp tránh việc tạo ra một hàm mới mỗi khi component render, giúp tối ưu hiệu suất của ứng dụng.

**_useMemo_**

- _Định nghĩa_: là một trong những hooks trong React được sử dụng để tối ưu hóa hiệu suất của việc tính toán giá trị mới, bằng cách nhớ kết quả của hàm callback hoặc biểu thức đã được tính toán trước đó và trả về kết quả đó nếu các dependencies không thay đổi.

- useMemo thường được sử dụng khi bạn cần tính toán các giá trị phức tạp hoặc tài nguyên tốn kém và muốn tránh tính toán lại các giá trị đó trong các lần render không cần thiết. Tuy nhiên, việc sử dụng quá nhiều useMemo có thể làm tăng kích thước của mã nguồn và làm cho code trở nên khó đọc và bảo trì.

- _Syntax_:

```JavaScript
const memoizedValue = useMemo(
  () => {
    // Logic to compute the value
    return computedValue;
  },
  [/* dependencies */]
);

```

- _Trong đó_:

  - `memoizedValue`: là giá trị được nhớ lại từ kết quả của hàm callback hoặc biểu thức đã được tính toán.
  - `() => { // Logic to compute the value }`: là logic để tính toán giá trị bạn muốn nhớ lại.
  - `[/* dependencies */]:` là một mảng chứa các dependencies. Nếu bất kỳ giá trị nào trong mảng này thay đổi, useMemo sẽ tính toán lại giá trị; nếu không, nó sẽ trả về giá trị đã nhớ từ lần render trước.

- _Example_:

```JavaScript
import React, { useMemo } from 'react';

function MyComponent({ list }) {
  // Tính toán tổng của mảng list, chỉ khi list thay đổi
  const sum = useMemo(() => {
    console.log('Computing sum...');
    return list.reduce((acc, curr) => acc + curr, 0);
  }, [list]);

  return <div>Sum: {sum}</div>;
}

```

Trong ví dụ này, sum sẽ chỉ được tính toán lại khi list thay đổi. Nếu list không thay đổi giữa các lần render, useMemo sẽ trả về giá trị đã nhớ từ lần render trước, giúp tối ưu hiệu suất của ứng dụng bằng cách tránh tính toán lại các giá trị không cần thiết.

**_useReducer_**

- _Định nghĩa_: là một trong những hooks trong React, cho phép bạn quản lý state của component thông qua một reducer function, tương tự như cách quản lý state trong Redux. useReducer thường được sử dụng khi có một logic state phức tạp hoặc khi state phụ thuộc vào trạng thái trước đó và các action gửi đến.

- useReducer thường được sử dụng khi có logic state phức tạp hoặc khi có nhiều hành động cần thực hiện trên state. Nó giúp tổ chức code một cách rõ ràng và dễ bảo trì khi state và các action được quản lý trong một chỗ duy nhất.

- _Syntax_: `const [state, dispatch] = useReducer(reducer, initialState);`

- _Trong đó_:

  - state: là trạng thái hiện tại của component.
  - dispatch: là một hàm để gửi action đến reducer function.
  - reducer: là một function nhận vào state hiện tại và action, và trả về state mới
  - initialState: là giá trị ban đầu của state

- _Example_:

```JavaScript
import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

```

Trong ví dụ trên, useReducer được sử dụng để quản lý state của Counter component thông qua reducer. Mỗi khi nút "Increment" hoặc "Decrement" được click, dispatch được gọi với action tương ứng, và reducer sẽ xử lý action đó để trả về state mới.

**_useContext_**

- _Định nghĩa_: là một trong những hooks trong React được sử dụng để truy cập giá trị của một Context (bối cảnh) mà bạn đã tạo bên ngoài component và chia sẻ giữa các components trong cây component mà không cần truyền props qua từng cấp con cháu.

- useContext thường được sử dụng để truy cập các thông tin chung (như theme, ngôn ngữ, user authentication) mà muốn chia sẻ trong toàn bộ ứng dụng mà không cần truyền props qua nhiều cấp component.

- Khi bạn tạo một Context bằng React.createContext(), bạn có thể sử dụng useContext để truy cập giá trị của Context đó từ bất kỳ component nào trong cây component.

- _Syntax_: `const value = useContext(MyContext);`

- _Trong đó_:

  - `MyContext` là đối tượng Context bạn đã tạo trước đó bằng `React.createContext()`
  - `value` là giá trị của Context mà bạn muốn truy cập

- _Example_:

```JavaScript
import React, { useContext } from 'react';

// Tạo một Context
const ThemeContext = React.createContext('light');

function ThemedButton() {
  // Sử dụng useContext để truy cập giá trị của Context
  const theme = useContext(ThemeContext);
  return <button style={{ backgroundColor: theme }}>Themed Button</button>;
}

function App() {
  // Sử dụng Context Provider để cung cấp giá trị cho các components con
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

```

Trong ví dụ này, useContext(ThemeContext) trong component ThemedButton cho phép ThemedButton truy cập giá trị của ThemeContext được cung cấp bởi ThemeContext.Provider trong component App. Khi giá trị của Context thay đổi, các components sử dụng useContext sẽ tự động cập nhật.

**_useImperativeHandle_**

- _Định nghĩa_: là một trong những hooks trong React được sử dụng để điều khiển cách mà một ref được expose ra bên ngoài component cha, đặc biệt khi bạn muốn điều khiển cách sử dụng các method của ref từ bên ngoài. Khi bạn sử dụng useImperativeHandle, bạn có thể chỉ định những method nào của ref mà bạn muốn "expose" ra bên ngoài component cha.

- useImperativeHandle thường được sử dụng khi bạn cần kiểm soát cách mà các method của ref được expose ra bên ngoài, đặc biệt là khi bạn muốn tối ưu hóa việc sử dụng các method của ref từ component cha.

- _Syntax_:

```JavaScript
useImperativeHandle(ref, () => {
  return {
    exposedMethod1,
    exposedMethod2,
    // ...
  };
}, [dependencies]);

```

- _Trong đó_:

  - ref : là ref mà bạn muốn expose ra bên ngoài
  - Hàm callback thứ hai trả về một object chứa các method hoặc properties mà bạn muốn expose
  - dependencies: (optional) là một mảng chứa các giá trị phụ thuộc. Nếu bất kỳ giá trị nào trong mảng này thay đổi, hàm callback sẽ được gọi lại

- _Example_:

```JavaScript
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Component con sử dụng useRef và useImperativeHandle để expose method
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose focus method của inputRef ra bên ngoài
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

// Component cha sử dụng ref để gọi method đã được expose
function ParentComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Gọi method focus từ bên ngoài component con
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

```

Trong ví dụ trên, useImperativeHandle được sử dụng trong CustomInput để expose method focus của inputRef ra bên ngoài. Sau đó, trong ParentComponent, method focus đã được expose được gọi khi nút "Focus Input" được click.
