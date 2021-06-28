import React from "react";
import Logo from "../Logo";
import LongMenu from "../LongMenu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import * as S from "./styles";

function Header({ type = "user", searchValue, onSearchChange }) {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <S.Search>
          {onSearchChange && (
            <>
              <SearchIcon />
              <InputBase
                style={{ width: "80%", color: "#fff", marginLeft: 10 }}
                placeholder="Search by name…"
                inputProps={{ "aria-label": "search" }}
                value={searchValue}
                onChange={onSearchChange}
              />
            </>
          )}
        </S.Search>
      </S.Container>
      <LongMenu option={type} />
    </S.Header>
  );
}

export default Header;
