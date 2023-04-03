import React from 'react';
import Input from '../common/Input';
import Link from 'next/link';
import Button, { ButtonKind, ButtonSize } from '../common/Button';

export default function UserForm() {
  return (
    <div>
      <form className="w-full">
        <Input
          label="First Name"
          id="first-name"
          type="text"
          placeholder="First name here"
        />
        <Input
          label="Last Name"
          id="last-name"
          type="text"
          placeholder="Last name here"
        />
        <Input label="Email" id="email" type="text" placeholder="Email here" />
        <Input
          label="Phone Number"
          id="phone-number"
          type="text"
          placeholder="Phone number here"
        />
        <Input
          label="Job Title"
          id="job-title"
          type="text"
          placeholder="Job title here"
        />
        <div className="">
          <Link href="/plans">
            <a>
              <Button
                kind={ButtonKind.primaryCta}
                size={ButtonSize.medium}
              >
                Sign Up
              </Button>
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}
