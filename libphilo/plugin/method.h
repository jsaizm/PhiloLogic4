// $Id: method.h,v 2.12 2004/05/28 19:22:08 o Exp $
// philologic 2.8 -- TEI XML/SGML Full-text database engine
// Copyright (C) 2004 University of Chicago
// 
// This program is free software; you can redistribute it and/or modify
// it under the terms of the Affero General Public License as published by
// Affero, Inc.; either version 1 of the License, or (at your option)
// any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// Affero General Public License for more details.
// 
// You should have received a copy of the Affero General Public License
// along with this program; if not, write to Affero, Inc.,
// 510 Third Street, Suite 225, San Francisco, CA 94107 USA.

#ifdef METHOD_H
  #error "method.h multiply included"
#else
  #define METHOD_H
  #ifndef C_H
    #include "../c.h"
  #endif

  typedef struct SearchMethod_st SearchMethod; 
  typedef struct SearchMethodEntry_st SearchMethodEntry; 


  #ifndef HITCMP_H
    #include "hitcmp.h"
  #endif 

  struct SearchMethod_st
  {
     Z32 (*build_search_level)(hitcmp *, Z8 *, Z32);
     Z8 *(*get_method_info)(void);
  }; 

  struct SearchMethodEntry_st
  {
     Z8           *sp_tag;
     SearchMethod *sp;
  };

#endif

