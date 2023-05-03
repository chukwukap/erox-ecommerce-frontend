import { useState, useEffect } from "react";

function useTitle(tle) {
  const [title] = useState(tle);
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useTitle;
