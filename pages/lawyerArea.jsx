import {useSession} from 'next-auth/react'
import Router from 'next/router'
import { useRouter } from 'next/router'

export default function Cases() {
  const router = useRouter();
  const {data:session, status} = useSession({
    required:true,
    onUnauthenticated(){
      router.push('signIn')
    }
  })

  if (status!=='authenticated') return null;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-8">
          <select className="form-select mb-3" aria-label=".form-select-lg example" >
            <option selected>Select case type</option>
            <option value="1">Land Disputes</option>
            <option value="2">Marriage Issues</option>
            <option value="3">Work Issues</option>
          </select>

        </div>
      </div>
    </div>
  )
}

 