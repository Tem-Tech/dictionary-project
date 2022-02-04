import React from "react";
export default function Dictionary() {
  return (
    <div>
      <h1>
        📒Dev<span class="cheq">Cheq</span>
      </h1>
      <hr />
      <div class="col-12">
        <div class="search">
          <form>
            <input
              class="input"
              type="text"
              name="s"
              placeholder="Search an idea...?"
            />
            <button type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
