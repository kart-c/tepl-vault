import { navOptions, title } from '@constants/header';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 shadow-md shadow-slate-250">
      <h1 className="text-3xl">{title}</h1>
      <div className="flex items-center gap-6">
        {navOptions.map((option) => {
          const { id, label, subMenu, href } = option;
          if (subMenu) {
            return (
              <div key={id} className="relative group">
                <button>{label}</button>
                <nav className="absolute flex flex-col gap-4 p-4 transition-all duration-200 ease-in rounded-md opacity-0 w-max bg-slate-100 group-hover:opacity-100">
                  {subMenu.map((menu) => (
                    <Link key={menu.id} href={menu.href}>
                      {menu.label}
                    </Link>
                  ))}
                </nav>
              </div>
            );
          }
          return (
            <nav key={id}>
              <Link href={href}>{label}</Link>
            </nav>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
